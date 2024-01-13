
import { useEffect, useState } from "react";
import BodyContent from "../../components/pages/blogDetailPages";
import Breadcrumb from "../../layout/Breadcrumb/BreadcrumbMukaSimple";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarOne";
import Img from "../../utils/BackgroundImageRatio";
import { useRouter } from 'next/router'
import { getData } from "../../utils/getData";


const RightSidebar = () => {
  const [blog, setBlog] = useState({});

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getData(`${process.env.NEXT_PUBLIC_API_URL}/content?filter=${id}&field=id`)
      .then((res) => {
        setBlog(res.data[0]);
      })
      .catch((error) => console.log("Error", error));
    }, [id]);

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"right"} blog={blog}>
        <div className="blog-detail-image">
          <Img src={blog.image} className="bg-img img-fluid" alt="" />
        </div>
        <h1 style={{padding: '20px 10px 10px'}}>{blog.title}</h1>
        <h4 style={{padding: '10px 10px', margin: '0', color: 'darkgray'}}>{blog.author}</h4>
      </BodyContent>
      <FooterThree />
    </>
  );
};
export default RightSidebar;
