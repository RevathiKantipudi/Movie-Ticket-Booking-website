import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import $ from "jquery";
import { Preview, print } from "react-html2pdf";

export const Successresponse = () => {
  const history = useHistory();
  const location = useLocation();
  var profile = location.state.profile;
  var email = location.state.email;
  var password = location.state.password;
  var mobile = location.state.mobile;
  var bookingdate = location.state.bookingdate;
  var username = location.state.username;
  var totalceats = location.state.totalceats;
  var ceatnames = location.state.ceatnames;
  var name = location.state.name;
  var moviename = location.state.moviename;
  var ticketcost = location.state.ticketcost;

  const downloadTicket = () => {
    print("Group 3", "booking-pdf");
  };
  const returnHome = () => {
    history.push({
      pathname: "/homepage",
      state: {
        profile: profile,
        name: username,
        email: email,
        password: password,
        mobile: mobile,
      },
    });
  };

  useEffect(() => {
    // $(".booking-pdf").hide();
  }, []);

  return (
    <div>
      <br />
      <div className="booking-pdf" style={{ marginTop: "50px" }}>
        <Preview id={"booking-pdf"}>
          <h1 style={{ marginLeft: "10%" }}>Group 3</h1>
          <p style={{ marginLeft: "10%" }}>Booking Date : {bookingdate}</p>
          <p style={{ marginLeft: "10%" }}>Ticket Booked By : {username}</p>
          <p style={{ marginLeft: "10%" }}>Total Seats : {totalceats}</p>
          <p style={{ marginLeft: "10%" }}>Seat Number : {ceatnames}</p>
          <p style={{ marginLeft: "10%" }}>Watchers : {name}</p>
          <p style={{ marginLeft: "10%" }}>Movie Name : {moviename}</p>
          <p style={{ marginLeft: "10%" }}>
            Total Cost : {ticketcost * totalceats}
          </p>
        </Preview>
      </div>
      <br />
      <button style={{ marginLeft: "10%" }} onClick={downloadTicket}>
        Download Ticket
      </button>
      <br />
      <br />
      <button style={{ marginLeft: "10%" }} onClick={returnHome}>
        Return To Home
      </button>
    </div>
  );
};
