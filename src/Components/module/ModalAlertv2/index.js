import React, { Fragment } from "react";
import * as BsIcons from "react-icons/bs";
import Button from "../../Button/index";
import "./modalAlertv2.css";

const ModalAlertv2 = ({
  alertv2Title,
  alertv2Desc,
  action1,
  action2,
  ...props
}) => {
  return (
    <Fragment>
      <div className="modal-bg ">
        <div className="modal-success-container animation-pull-down">
          <section className="modal-success-content">
            <BsIcons.BsCreditCard2FrontFill className="success-modal-icon mt-1" />
            <div className="modal-success-text">
              <p className="modal-success-title">{alertv2Title}</p>
              <p className="modal-success-description">{alertv2Desc}</p>
            </div>
          </section>

          <section className="modal-alertv2-footer d-flex">
            <Button onClick={props.closeModal} className="btn-modal-later ">
              {action2}
            </Button>
            <Button onClick={props.handleAction} className="btn-modal-success ">
              {action1}
            </Button>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalAlertv2;
