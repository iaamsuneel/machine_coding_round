import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
const companyList = [
  {
    company: "HCL Technologies",
    location: "Noida",
    work: "IT Services",
    funderYear: "1976",
    noOfEmployee: 150000,
  },
  {
    company: "Tata 1mg",
    location: "Noida",
    work: "Product Development",
    funderYear: "1976",
    noOfEmployee: 150000,
  },
  {
    company: "Paytm",
    location: "Noida",
    work: "Fintech",
    funderYear: "2010",
    noOfEmployee: 7000,
  },
  {
    company: "Tech Mahindra",
    location: "Noida",
    work: "IT Services",
    funderYear: "1986",
    noOfEmployee: 125000,
  },
  {
    company: "Birlasoft",
    location: "Noida",
    work: "IT Consulting",
    funderYear: "1995",
    noOfEmployee: 12000,
  },
  {
    company: "InfoEdge (Naukri)",
    location: "Noida",
    work: "Internet Services",
    funderYear: "1995",
    noOfEmployee: 5000,
  },
  {
    company: "Samsung R&D Institute",
    location: "Noida",
    work: "Research & Development",
    funderYear: "1996",
    noOfEmployee: 3000,
  },
  {
    company: "Ericsson India",
    location: "Noida",
    work: "Telecom Services",
    funderYear: "1876",
    noOfEmployee: 24000,
  },
  {
    company: "Adobe",
    location: "Noida",
    work: "Product Development",
    funderYear: "1982",
    noOfEmployee: 22000,
  },
  {
    company: "Snapdeal",
    location: "Gurgaon",
    work: "E-commerce",
    funderYear: "2010",
    noOfEmployee: 1500,
  },
  {
    company: "Genpact",
    location: "Gurgaon",
    work: "Business Process Management",
    funderYear: "1997",
    noOfEmployee: 100000,
  },
  {
    company: "Zomato",
    location: "Gurgaon",
    work: "Food Delivery",
    funderYear: "2008",
    noOfEmployee: 5000,
  },
  {
    company: "OYO Rooms",
    location: "Gurgaon",
    work: "Hospitality",
    funderYear: "2013",
    noOfEmployee: 10000,
  },
  {
    company: "UrbanClap (Urban Company)",
    location: "Gurgaon",
    work: "Home Services",
    funderYear: "2014",
    noOfEmployee: 2000,
  },
  {
    company: "Indigo Airlines",
    location: "Gurgaon",
    work: "Aviation",
    funderYear: "2006",
    noOfEmployee: 23000,
  },
  {
    company: "MakeMyTrip",
    location: "Gurgaon",
    work: "Online Travel Agency",
    funderYear: "2000",
    noOfEmployee: 3500,
  },
  {
    company: "Droom",
    location: "Gurgaon",
    work: "Online Marketplace",
    funderYear: "2014",
    noOfEmployee: 1000,
  },
  {
    company: "Cars24",
    location: "Gurgaon",
    work: "Online Marketplace for Cars",
    funderYear: "2015",
    noOfEmployee: 6000,
  },
  {
    company: "PolicyBazaar",
    location: "Gurgaon",
    work: "Insurance Aggregator",
    funderYear: "2008",
    noOfEmployee: 15000,
  },
  {
    company: "ReNew Power",
    location: "Gurgaon",
    work: "Renewable Energy",
    funderYear: "2011",
    noOfEmployee: 1000,
  },
  {
    company: "Delhivery",
    location: "Gurgaon",
    work: "Logistics Services",
    funderYear: "2011",
    noOfEmployee: 50000,
  },
];
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(companyList);
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  // search function
  const searchListOfCompany = (inputKey) => {
    let searchKey = inputKey.toLowerCase();
    const filteredData = companyList.filter(
      (item) =>
        item.company.toLowerCase().includes(searchKey) ||
        item.location.toLowerCase().includes(searchKey) ||
        item.work.toLowerCase().includes(searchKey) /* ||
        item.funderYear.toLowerCase().includes(searchKey) ||
        Number(item.noOfEmployee).includes(Number(searchKey)) */
    );
    setData(filteredData);
  };
  useEffect(() => {
    if (searchInput) {
      searchListOfCompany(searchInput);
    } else {
      setData(companyList);
    }
  }, [searchInput]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          
        }}
      >
        <div>
          <input
            style={{ borderRadius: "3px", padding: "4px", width: "250px" }}
            placeholder="Search here..."
            type="text"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
        <div>
          <ItemList dataList={data} />
        </div>
      </div>
    </>
  );
}
