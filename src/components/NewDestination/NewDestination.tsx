import { SyntheticEvent, useState } from "react";
import useDestinations from "../../store/hooks/useDestinations/useDestinations";
import { ProtoDestination } from "../../store/models/Destinations";
import Button from "../Button/Button";
import NewDestinationStyled from "./NewDestinationStyled";

const NewDestination = () => {
  const { createDestination } = useDestinations();

  const initialformData = new FormData();

  const initialDestination: ProtoDestination = {
    destination: "",
    latitude: 0,
    longitude: 0,
    category: "",
    image: "",
    firstPlan: "",
    descriptionFirstPlan: "",
    secondPlan: "",
    descriptionSecondPlan: "",
    thirdPlan: "",
    descriptionThirdPlan: "",
  };

  const [destinationData, setDestinationData] = useState(initialDestination);
  const [formData, setFormData] = useState(initialformData);

  const handleChangeForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDestinationData({
      ...destinationData,
      [event.target.id]: event.target.value,
    });
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    formData.append("image", file);
    setDestinationData({ ...destinationData, image: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append("destination", destinationData.destination);
    formData.append("latitude", destinationData.latitude.toString());
    formData.append("longitude", destinationData.longitude.toString());
    formData.append("firstPlan", destinationData.firstPlan);
    formData.append(
      "descriptionFirstPlan",
      destinationData.descriptionFirstPlan
    );
    formData.append("secondPlan", destinationData.secondPlan!);
    formData.append(
      "descriptionSecondPlan",
      destinationData.descriptionSecondPlan!
    );
    formData.append("thirdPlan", destinationData.thirdPlan!);
    formData.append(
      "descriptionThirdPlan",
      destinationData.descriptionThirdPlan!
    );
    formData.append("category", destinationData.category);

    createDestination(formData);
    setDestinationData(initialDestination);
    setFormData(initialformData);
  };

  const isFormValid = (): boolean =>
    destinationData.destination !== initialDestination.destination ||
    destinationData.longitude !== initialDestination.longitude ||
    destinationData.latitude !== initialDestination.latitude ||
    destinationData.category !== initialDestination.category ||
    destinationData.firstPlan !== initialDestination.firstPlan ||
    destinationData.descriptionFirstPlan !==
      initialDestination.descriptionFirstPlan;

  return (
    <>
      <NewDestinationStyled onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-group__label" htmlFor="destination">
            Destino
          </label>
          <input
            type="text"
            id="destination"
            placeholder="¿Dónde quieres ir?"
            value={destinationData.destination}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="latitude">
            Latitud
          </label>
          <input
            type="number"
            id="latitude"
            placeholder="Formato 51.505"
            value={destinationData.latitude}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
          <label className="form-group__label" htmlFor="longitude">
            Longitud
          </label>
          <input
            type="number"
            id="longitude"
            placeholder="Formato -0.090"
            value={destinationData.longitude}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="category">
            Categoría Destino
          </label>
          <select
            name="category"
            id="category"
            className="form-group__input"
            onChange={handleChangeForm}
          >
            <option>Playa</option>
            <option>Naturaleza</option>
            <option>Urbano</option>
            <option>Aventura</option>
            <option>Cultura</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="firstPlan">
            Plan 1
          </label>
          <input
            type="text"
            id="firstPlan"
            placeholder="¿Qué quieres visitar?"
            value={destinationData.firstPlan}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="descriptionFirstPlan">
            Breve descripción plan 1
          </label>
          <textarea
            id="descriptionFirstPlan"
            placeholder="Anotaciones"
            value={destinationData.descriptionFirstPlan}
            autoComplete="off"
            className="form-group__input form-group__text-area"
            onChange={handleChangeForm}
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="secondPlan">
            Plan 2
          </label>
          <input
            type="text"
            id="secondPlan"
            placeholder="¿Qué quieres visitar?"
            value={destinationData.secondPlan}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="descriptionSecondPlan">
            Breve descripción plan 2
          </label>
          <textarea
            id="descriptionSecondPlan"
            placeholder="Anotaciones"
            value={destinationData.descriptionSecondPlan}
            autoComplete="off"
            className="form-group__input form-group__text-area"
            onChange={handleChangeForm}
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="thirdPlan">
            Plan 3
          </label>
          <input
            type="text"
            id="thirdPlan"
            placeholder="¿Qué quieres visitar?"
            value={destinationData.thirdPlan}
            onChange={handleChangeForm}
            autoComplete="off"
            className="form-group__input"
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="descriptionThirdPlan">
            Breve descripción plan 3
          </label>
          <textarea
            id="descriptionThirdPlan"
            placeholder="Anotaciones"
            value={destinationData.descriptionThirdPlan}
            autoComplete="off"
            className="form-group__input form-group__text-area"
            onChange={handleChangeForm}
          />
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="image">
            Añadir Foto
          </label>
          <input type="file" id="image" onChange={handleChangeFile} />
        </div>

        <Button
          classNameTypeButton="small"
          actionOnclick={() => {}}
          buttonText="Crear"
          type="submit"
          isDisabled={!isFormValid()}
        />
      </NewDestinationStyled>
    </>
  );
};

export default NewDestination;
