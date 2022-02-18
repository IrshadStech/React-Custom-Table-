import React, { useEffect, useState } from "react";
import Table from "../component/Table";

export default function TestComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/users/")
    ).json();
    setData(response);
  };
const  handleTableButtonClick=(item,type)=>{
    console.log("item data", item)
    if(type == "Edit"){
       alert("Edit button click") 
     }else if(type == "Delete"){
         alert("Delete button click") 
     }
 }
  return (
    <div>
        {console.log("fr", data)}
      {data.length > 0 ? (
        <Table
          primaryKeyField={"PersonId"}
          data={data}
          listItemToDisplay={[
            { name: "Id", valueField: "id" },
            { name: "Name", valueField: "name" },
            { name: "Username", valueField: "username" },
            { name: "Phone", valueField: "phone" },
            { name: "Website", valueField: "website" },
          ]}
          buttonsToDisplay={[
            { name: "Edit", imgClass: "td-edit-btn", },
            { name: "Delete", imgClass: "td-delete-btn" },
          ]}
           onTableButtonClick={handleTableButtonClick}
        />
      ) : (
        <div className="empty-list-msg">There is no data available to show</div>
      )}{" "}
    </div>
  );
}
