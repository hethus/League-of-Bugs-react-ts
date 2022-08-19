import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import * as Styled from "./styles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useChampions } from "../../contexts/champions";
import { Champion } from "../../assets/types";
import { useClasses } from "../../contexts/classes";

interface ModalChampionSettingsProps {
  handleOpenModal: () => void;
  champion?: Champion;
  setChampion: Dispatch<SetStateAction<Champion | undefined>>;
}

interface NewChampionData {
  name?: string;
  description?: string;
  price?: number;
  title?: string;
  imageUrl?: string;
  difficulty?: string;
  youTubeUrl?: string;
  classeId?: string;
}

const newChampionSchema = yup.object().shape({
  name: yup.string().required("Name of the champion is required"),

  description: yup.string().required("Description of the champion is required"),

  price: yup
    .number()
    .typeError("Amount must be a number")
    .integer("Amount must be an integer")
    .positive("Amount must be positive")
    .required("Amount is required"),

  imageUrl: yup
    .string()
    .url("Image URL must be a valid URL")
    .required("Image URL is required"),
  
  title: yup.string().required("Title of the champion is required"),

  youTubeUrl: yup
    .string()
    .url("YouTube URL must be a valid URL")
    .required("YouTube URL is required"),
});

const updateChampionSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  price: yup
  .number()
  .typeError("Amount must be a number")
  .integer("Amount must be an integer")
  .positive("Amount must be positive"),

  imageUrl: yup
    .string()
    .url("Image URL must be a valid URL"),
  
  title: yup.string(),

  youTubeUrl: yup
    .string()
    .url("YouTube URL must be a valid URL"),
});

const ModalChampionSettings = ({
  handleOpenModal,
  champion,
  setChampion,
}: ModalChampionSettingsProps) => {
  const { handleGetChampions } = useChampions();
  const { classes } = useClasses();

  const [classeId, setClasseId] = useState<string>(
    champion ? champion.classeId : ""
  );

  const [difficulty, setDifficulty] = useState<string>(
    champion ? champion.difficulty : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewChampionData>({
    resolver: yupResolver(champion ? updateChampionSchema : newChampionSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewChampion = (data: NewChampionData) => {
    data.classeId = classeId;
    data.difficulty = difficulty;

    api
      .post("/champions", data, headers)
      .then(() => {
        toast.success("Champion created!");
        handleGetChampions();
        setChampion(undefined);
        handleOpenModal();
      })
      .catch((e) => {
        toast.error("Add all information")
      });
  };

  const handleUpdateChampion = (data: NewChampionData) => {
    data.classeId = classeId;
    data.difficulty = difficulty;

    api.patch(`/champions/${champion?.id}`, data, headers).then(() => {
      toast.success("Champion updated!");
      handleGetChampions();
      setChampion(undefined);
      handleOpenModal();
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          champion
            ? handleSubmit(handleUpdateChampion)
            : handleSubmit(handleNewChampion)
        }
      >
        <h2>{champion ? "Edit Champion" : "Add Champion"}</h2>
        <StyledInput
          defaultValue={champion ? champion.name : ""}
          placeholder="Name"
          {...register("name")}
        />
        <StyledInput
          defaultValue={champion ? champion.title : ""}
          placeholder="Title"
          {...register("title")}
        />
        <StyledInput
          defaultValue={champion ? champion.description : ""}
          placeholder="Description"
          {...register("description")}
        />
        <StyledInput
          defaultValue={champion ? champion.price : ""}
          type="number"
          placeholder="Price"
          {...register("price")}
        />
        <StyledInput
          defaultValue={champion ? champion.imageUrl : ""}
          placeholder="Image URL"
          {...register("imageUrl")}
        />
        <StyledInput
          defaultValue={champion ? champion.youTubeUrl : ""}
          placeholder="YouTube URL"
          {...register("youTubeUrl")}
        />
        <Styled.Select
          value={classeId}
          onChange={(e) => setClasseId(e.target.value)}
        >
          <option> Select a classe </option>
          {classes.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </Styled.Select>
        <Styled.Select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option> Select the difficulty of the champion </option>
            <option value="easy">
              Easy
            </option>
            <option value="medium">
              Medium
            </option>
            <option value="hard">
              Hard
            </option>
        </Styled.Select>
        {
          <ErrorMessage className="error">
            {errors.name?.message ||
              errors.description?.message ||
              errors.price?.message ||
              errors.imageUrl?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={() => {
              setChampion(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancel"
            variant="cancel"
          />
          <Button size="small" text="Submit" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default ModalChampionSettings;
