import React from "react";
import Nav from "../components/Nav";
import RoomInfo from "../components/Room/RoomInfo.Room";
import Footer from "../components/Footer";
import Reviews from "../components/Room/Reviews.Room";
import room from "../images/room.jpeg";

const Room = () => {
  return (
    <div>
      <Nav minimal={false} />

      <div className="flex flex-col">
        <RoomInfo
          room={room}
          allImages={[room, room, room, room, room, room]}
          name={"Mera Apartment"}
          address={"In Law Gate, Block 1"}
          distance={"1"}
          college={"LPU"}
          description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate in modi recusandae animi sit veritatis vitae aut incidunt, omnis, minus eligendi illum labore dolorum, deserunt reprehenderit veniam eos officiis soluta quod adipisci provident doloremque quasi! Dolores doloribus nulla unde neque. Temporibus, quibusdam harum. Consequuntur ut officia nesciunt quam sed nisi?"}
          price={7000}
        />
        <Reviews />
      </div>

      <Footer bgColor="bg-c1" borderColor="border-c1" />
    </div>
  );
};

export default Room;
