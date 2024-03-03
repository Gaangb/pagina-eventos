import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogModal({
  hidden,
  modalOpen,
  setModalOpen,
  handleDelete,
  id,
  text,
  title,
}) {
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleAgree = () => {
    handleClose();
    handleDelete();
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
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {!hidden && <Button onClick={handleClose}>Cancelar</Button>}
            <Button onClick={handleAgree} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
