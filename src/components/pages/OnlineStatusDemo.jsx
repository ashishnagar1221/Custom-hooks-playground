import useOnlineStatus from "../../customhooks/useOnlineStatus";

const OnlineStatusDemo = () => {
  const isUserOnline = useOnlineStatus();
  console.log(isUserOnline);
  return <div>{isUserOnline === true ? "🟢 You are online" : "🔴 You are offline"}</div>;
};

export default OnlineStatusDemo;
