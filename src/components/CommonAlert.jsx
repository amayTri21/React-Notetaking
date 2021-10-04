import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';


   export function showAlert(msg){

    confirmAlert({
        title: "Alert!",
        message: msg,
        buttons: [
          {
            label: 'Ok',
            onClick: () => { return false }
          },

        ]
      })
}



export function showSuccess(msg){

  confirmAlert({
      message: msg,
      buttons: [
        {
          label: 'Ok',
          onClick: () => { return false }
        },

      ]
    })
}