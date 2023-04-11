import { connect } from "react-redux"
import InfoCoctail from "./InfoCoctail/InfoCoctail";

const mapStateToProps = (state) => {
    return {
        infoCoctailData: state.coctailsPage.infoCoctailData,
    }
}

const InfoCoctailContainer = connect(mapStateToProps, {})(InfoCoctail);

export default InfoCoctailContainer;