import React, { useEffect, useState } from "react";
import Table from "../component/Table";

export default function TestComponent2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=150")
    ).json();
    setData(response);
  };
  const  handleTableButtonClick=(item,type)=>{
      console.log("item data", item)
    if(type == "Edit"){
        // do whatever you want when edit button click
       alert("Edit button click") 
     }else if(type == "Delete"){
          // do whatever you want when delete button click
         alert("Delete button click") 
     }
 }
  return (
    <div>
      {data.length > 0 ? (
        <Table
          primaryKeyField={"PersonId"}
          data={data}
          listItemToDisplay={[
            { name: "Id", valueField: "id" },
            { name: "User Id", valueField: "userId" },
            { name: "Title", valueField: "title" },
            { name: "completed", valueField: "completed" },
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
