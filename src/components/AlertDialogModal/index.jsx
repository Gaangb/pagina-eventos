import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogModal({ modalOpen, setModalOpen, handleDelete, id }) {
  const [open, setOpen] = useState(modalOpen);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleAgree = () => {
    handleClose(); // Fecha o modal
    handleDelete(); // Chama a função de delete
  };

  return (
    <>
      {modalOpen && (
        <Dialog
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Excluir evento?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tem certeza que deseja excluir este evento? A ação não poderá ser desfeita.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleAgree} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
