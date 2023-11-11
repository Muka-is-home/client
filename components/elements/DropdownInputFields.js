import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropdownInputFields = ({ data, label, query, filterValues, setFilterValues }) => {
  const [isOpen, setIsOpen] = useState("true");
  const [value, setValue] = useState(data.label);


  return (
    <div className='form-group'>
      {label && <label>{data.label}</label>}
      <Dropdown
        isOpen={isOpen === data.label ? true : false}
        toggle={function noRefCheck() {
          setIsOpen(data.label);
          isOpen === data.label && setIsOpen();
        }}>
        <DropdownToggle className="font-secondary" caret>
          {value}
          <i className='fas fa-angle-down'></i>
        </DropdownToggle>
        <DropdownMenu>
          {data.options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                filterValues = { ...filterValues, ...{ [`${data.name}`]: `${option}` } };
                setIsOpen();
              }}
            >
              <DropdownItem
                onClick={() => {
                  setFilterValues({ ...filterValues, ...{ [`${data.name}`]: option.toLowerCase() } });
                  query(option);
                  setValue(option);
                }}
                >
                {option}
              </DropdownItem>
            </div>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export { DropdownInputFields };
