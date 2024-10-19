import Button from "../../button";
import Divider from "../../divider";
import IconMenu from "../../icons/icon-menu";
import IconSearch from "../../icons/icon-search";
import CheckBox from "../../input/check-box";
import TextInput from "../../input/text-input";

const Filter = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-between md:flex-wrap md:gap-2 px-5 py-2 border-b border-b-gray-200">
      <div className="flex items-center">
        <IconMenu />
        <CheckBox lable="Text" variant="primary" />
        <CheckBox lable="Text" variant="secondary" />
        <CheckBox lable="Text" variant="secondary" />
        <Divider />
        <CheckBox lable="Text" variant="secondary" />
        <CheckBox lable="Text" variant="secondary" />
        <CheckBox lable="Text" variant="secondary" />
        <Divider />
        <CheckBox lable="Text" variant="secondary" />
        <CheckBox lable="Text" variant="secondary" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button variant="ghost">Filter</Button>
        <TextInput name="Find" placeholder="Find" startIcon={<IconSearch />} />
      </div>
    </div>
  );
};

export default Filter;
