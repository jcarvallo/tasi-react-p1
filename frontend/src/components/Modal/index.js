import React from "react";
import withModal from "./withModal";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const AlertModal = ({ ...res }) => {
  let { modal, closeModal, redirect } = res;
  return (
    <div>
      <Modal isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Información</ModalHeader>
        <ModalBody className="text-center">
          <strong>
            Su saldo es insuficiente. Puede consultar su saldo, probar con otro
            monto o cancelar la operación.
          </strong>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-footer-modal"
            onClick={() => redirect("cancelacion")}
          >
            Cancelar
          </Button>{" "}
          <Button
            className="btn-footer-modal"
            onClick={() => redirect("saldo")}
          >
            Consultar saldo
          </Button>
          <Button
            className="btn-footer-modal"
            onClick={() => redirect("otro-monto")}
          >
            Otro monto
          </Button>
        </ModalFooter>
      </Modal>
      <style jsx="true">
        {`
            .btn-footer-modal {
                background-color: #f60;
                border-color: #f60;
                width: 146px !important;
                font-size: 14px;
            }
          `}
      </style>
    </div>
  );
};

export default withModal(AlertModal);
