import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NavigationItems from "./components/Navigation/NavigationItems";
import Navigation from "./components/Navigation/Navigation";
import Categories from "./components/Categories";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "./data";
import BannerItems from "./components/Banners/BannerItems";
import HomeBannersItems from "./components/Banners/HomeBannersItems";
import ManagePageContent from "./components/Web Pages/ManagePageContent";
import PageContentItems from "./components/Web Pages/PageContentItems";
import Reviews from "./components/Reviews";
import AddCategory from "./components/AddCategory";
import AddNavigation from "./components/Navigation/AddNavigation";
import Banners from "./components/Banners/Banners";
import HomePageBanners from "./components/Banners/HomePageBanners";
import NewHomeBanner from "./components/Banners/NewHomeBanner";
import UploadBanner from "./components/Banners/UploadBanner";
import ReviewsItems from "./components/ReviewsItems";
import Blogs from "./components/Blogs/Blog";
import BlogItems from "./components/Blogs/BlogItems";
import BlogsComments from "./components/Blogs/BlogComments";
import BlogCommentsItems from "./components/Blogs/BlogCommentsItems";
import Email from "./components/Email";
import AddEmailTemplate from "./components/AddEmailTemplate";
import Customers from "./components/Customers";
import CustomerItems from "./components/CustomerItems";
import ResetPassword from "./components/ResetPassword";
import SendMessage from "./components/SendMessage";
import ChangePassword from "./components/ChangePassword";
import CustomersProfile from "./components/CustomersProfile";
import AddPage from "./components/Web Pages/AddPage";

function App() {
  const NavigationElements = data.map((items) => {
    return (
      <NavigationItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const CategoryElements = data.map((items) => {
    return (
      <Categories
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const BannersElements = data.map((items) => {
    return (
      <BannerItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const HomeBannersElements = data.map((items) => {
    return (
      <HomeBannersItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const PageContentElements = data.map((items) => {
    return (
      <PageContentItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const ReviewsElements = data.map((items) => {
    return (
      <ReviewsItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const ReviewCardsElements = data.map((items) => {
    return (
      <Reviews
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const BlogElements = data.map((items) => {
    return (
      <BlogItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const BlogCommentsElements = data.map((items) => {
    return (
      <BlogCommentsItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const EmailElements = data.map((items) => {
    return (
      <Email
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const CustomersElements = data.map((items) => {
    return (
      <CustomerItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  // console.log(CategoryElements);
  return (
    <div>
      {/* <Header /> */}
      <Container fluid style={{ backgroundColor: "#f4f3f3" }}>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Navbar />
          </Col>
          <Col xs={10}>
            <Container fluid style={{ backgroundColor: "#f4f3f3" }}>
              {/* <Card>
                <Card.Body> */}
              {/* <AddCategory/> */}
              {/* <AddNavigation/> */}
              {/* <Categories /> */}
              {/* {CategoryElements} */}
              {/* <AddNavigation/> */}
              {/* <Navigation />
              {NavigationElements} */}
              {/* <Banners />
              {BannersElements} */}
              {/* <HomePageBanners />
              {HomeBannersElements} */}
              {/* <NewHomeBanner/> */}
              {/* <ManagePageContent/>
                  {PageContentElements} */}
              {/* <ews/> */}
              {/* {ReviAddPage/> */}
              {/* <ReviewCardsElements}
              {ReviewsElements} */}
              {/* <Blogs />
              {BlogElements} */}
              <BlogsComments />
              {BlogCommentsElements}
              {/* {EmailElements} */}
              {/* <Email/> */}
              {/* <AddEmailTemplate/> */}
              {/* <Customers />
              {CustomersElements} */}
              {/* <ResetPassword/> */}
              {/* <SendMessage/> */}
              {/* <ChangePassword /> */}
              {/* </Card.Body>
              </Card> */}
              {/* <CustomersProfile/> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
