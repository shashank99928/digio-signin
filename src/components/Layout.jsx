import { Modal } from "@mui/material";
import React, { useState } from "react";

const Layout = ({ children, open }) => {
  const [openModal, setModalOpen] = useState(true);
  const handleShowModal = () => {
    setModalOpen(true);
  };
  return (
    <div style={{ width: "600px" }}>
      <Modal
        sx={{
          "& > .MuiBackdrop-root": {
            backdropFilter: "blur(2px)",
          },
        }}
        open={openModal}
        children={children}
        onClose={(e, reason) => {
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            setModalOpen(false);
          }
        }}
      />
      <div>
        Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk
        Nederlands English Eesti Filipino Suomi Français ქართული Deutsch
        Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai
        македонски Melayu Norsk Polski Português Româna Pyccкий Српски
        Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt
        Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit..." "There is no one who loves pain
        itself, who seeks after it and wants to have it, simply because it is
        pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        eget magna congue, elementum lorem at, sollicitudin dolor. Quisque
        tincidunt elit eu lacus laoreet aliquet varius nec elit. Donec tempor
        diam et tincidunt eleifend. Phasellus nisi orci, efficitur nec odio sed,
        luctus finibus enim. Praesent imperdiet lorem eu varius facilisis.
        Integer molestie, urna ac maximus elementum, lorem orci dapibus lectus,
        ac luctus erat dui quis orci. Integer id faucibus tellus. Vivamus a nisi
        vel erat vestibulum bibendum. Nullam tristique lacinia nulla, et pretium
        nulla iaculis vitae. Etiam eget nibh nunc. Phasellus eu quam ac metus
        interdum feugiat. Suspendisse dignissim, ex quis blandit dictum, massa
        libero consequat lectus, commodo porttitor nunc nibh vitae eros. Duis a
        justo justo. In ante tortor, imperdiet eu venenatis nec, viverra id
        eros. Phasellus non urna eget sem eleifend dignissim. Donec nec placerat
        eros, quis malesuada lectus. Sed sed facilisis nisi. Mauris facilisis
        nisl ornare, ornare nibh sit amet, scelerisque elit. Nullam ligula odio,
        dignissim sit amet convallis sit amet, euismod ut justo. Nullam in dolor
        non augue fermentum egestas. Sed finibus magna cursus, condimentum mi
        eget, gravida velit. Curabitur viverra lorem a lacus vestibulum cursus.
        Aliquam ullamcorper ultrices blandit. Suspendisse ut ligula ac magna
        placerat iaculis vestibulum eu est. Cras tempor id diam quis mattis.
        Nullam molestie rhoncus urna, vitae euismod quam vulputate nec.
        Curabitur finibus nisl sit amet sapien sagittis placerat. Sed congue
        quam erat, non euismod leo commodo ut. Aenean interdum ex vitae nunc
        laoreet, eu pharetra arcu fermentum. Suspendisse vehicula quis leo ut
        elementum. Cras quis imperdiet mauris. Sed scelerisque consectetur enim
        eget dapibus. Fusce tincidunt vel erat non suscipit. Mauris vel
        pellentesque turpis. Etiam at lacinia neque, sed molestie velit. Donec a
        mi vel risus pharetra aliquet. Nulla tempor sapien non felis ornare
        mattis. Integer vel purus tristique eros congue vulputate. In elit nisl,
        eleifend sit amet felis quis, tristique sollicitudin nibh. Fusce id
        ligula ac tortor ullamcorper ultrices nec sit amet odio. Donec ligula
        mauris, faucibus vel aliquam nec, dignissim euismod sapien. Fusce a
        augue et tellus iaculis vestibulum. Maecenas sem metus, blandit sed
        massa ut, pretium malesuada tellus. Proin et dui at purus sollicitudin
        blandit et imperdiet velit. Duis sem nulla, ullamcorper nec hendrerit
        rutrum, rhoncus ac arcu. Cras ullamcorper nisl ipsum, ac iaculis felis
        rutrum consequat. Cras interdum quam risus, at pretium augue vulputate
        et. Maecenas lobortis neque ante, a finibus odio suscipit id. Curabitur
        ut tortor quis mi blandit cursus ut id ex. Cras tempor in turpis non
        fringilla. Etiam sit amet purus imperdiet, viverra dui vitae, tempus
        nulla. Aliquam porttitor dui sit amet pretium pretium. Nulla a sagittis
        lacus. Donec nec lacus lobortis, egestas velit quis, venenatis sapien.
        Generated 5 paragraphs, 441 words, 2934 bytes of Lorem Ipsum
        help@lipsum.com Privacy Policy · Do Not Sell My Personal Information ·
        Change Consent
      </div>

      {open && <button onClick={handleShowModal}>Request OTP to SignIn</button>}
    </div>
  );
};

export default Layout;
