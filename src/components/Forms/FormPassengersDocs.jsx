import React, { useState } from "react";
import { Button } from "../Atoms/Atoms";
import ControllableStates from "../Molecules/ControllableStates";
import ControlledInput from "../Molecules/ControlledInput";

/**Собрать из двух форм одну и сократить количество стейтов */

const FormPassengersDocs = ({ options }) => {
  const [seria, setSeria] = useState("");
  const [number, setNumber] = useState("");
  const [typeDocs, setTypeDocs] = useState("passport");
  
  return (
    <React.Fragment>
      <div className="form passengers-docs_form">
        <div className="passengers-data_docs">
          <div className="passengers-data_type">
            <label className="passengers-data_document_label">
              Тип документа
            </label>
            <ControllableStates
              type={typeDocs}
              setState={setTypeDocs}
              options={["Паспорт РФ", "Свидетельство о рождении"]}
            />
          </div>

          {typeDocs === "Паспорт РФ" ? (
            <div className="form-group group_document-range">
              <label className="passengers-data_document_label">Серия</label>
              <ControlledInput
                type={typeDocs}
                state={seria}
                setState={setSeria}
              />
            </div>
          ) : null}
          <div className="form-group group_document-number">
            <label className="passengers-data_document_label">Номер</label>
            <ControlledInput
              type={typeDocs}
              state={number}
              setState={setNumber}
            />
          </div>

        </div>
        <div className="passengers-info_block_control">
            <Button
              text="Следующий пассажир"
              type="next-passenger"
              onClick={() => console.log("personal_information")}
            ></Button>
          </div>
      </div>
    </React.Fragment>
  );
};

export default FormPassengersDocs;

/**<TextField
  id="outlined-controlled"
  label="Controlled"
  value={name}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }}
/> */

/** <label
               
                className="passengers-data_document_label"
              >
                Серия
              </label>
              <input
                type="text"
                className="form-control input-document-range"
                id="exampleFormControlDocs-range"
              />
            </div>
            <div className="form-group group_document-number">
              <label
               
                className="passengers-data_document_label"
              >
                Номер
              </label>
              <input
                type="text"
                className="form-control input-document-number"
                id="exampleFormControlDocumentNumber"
              /> */
