import AnnounceBar from "../components/AnnounceBar";

// eslint-disable-next-line storybook/story-exports
const stories = {
  title: "AnnounceBar",
  component: AnnounceBar,
};

export default stories;

const WithTypeSuccess = () => {
  <AnnounceBar
    title="Success"
    content="This is a success message"
    ctaLabel="Click me"
    type="success"
    onClick={() => {}}
  />;
};
export { WithTypeSuccess };
