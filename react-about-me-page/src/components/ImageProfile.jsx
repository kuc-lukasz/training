import PortretImg from "../icons/portret.jpg";
import PortretImgStyles from "../styles/ImageProfile.module.css";

export const ImageProfile = () => {
    return (
        <img
            className={PortretImgStyles.img}
            src={PortretImg}
            alt="portretPhoto"
        />
    );
};
