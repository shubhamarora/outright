import ViewTemplates from "./view";
import EditTemplates from "./edit";

const ViewBase = () => (Object.assign(this, ViewTemplates, EditTemplates));

const viewBaseObj = new ViewBase()

export default viewBaseObj;