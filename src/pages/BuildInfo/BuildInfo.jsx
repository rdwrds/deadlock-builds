import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './BuildInfo.css'

const BuildInfo = () => {
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  console.log("hellow i am build info");

  //showModal needed for backdrop
  useEffect(() => {
    console.log(dialogRef.current);
    //open the modal when the component is rendered
    //component is only rendered when pathed to by router
    dialogRef.current.showModal();
  }, []);

  const onClose = () => {
    //return to build page on close
    navigate(-1);
  };

  return (
    <dialog
      className="build-info-dialog"
      ref={dialogRef}
      onClose={onClose}
      style={{}}
    >
      BuildInfo
    </dialog>
  );
};
export default BuildInfo;
