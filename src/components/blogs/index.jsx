import React from "react";
import "./style.scss";

// Section Import
import Section from "../shared/section";
import BlogCard from "./blog-card";

// Blog Image Import
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
  return (
    <Section id="blog" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Pradip Chaudhary"
          date="2023-jan-2"
          image={Blog1}
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        />
        <BlogCard
          user="Pradip Chaudhary"
          date="2023-jan-2"
          image={Blog2}
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        />
        <BlogCard
          user="Pradip Chaudhary"
          date="2023-jan-2"
          image={Blog3}
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        />
      </div>
    </Section>
  );
};

export default Blogs;
