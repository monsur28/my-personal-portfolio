const LinkedinPost = () => {
  return (
    <div>
      <h2>Latest LinkedIn Post</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7259456443169308673" height="1602" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
        }}
      />
    </div>
  );
};

export default LinkedinPost;
