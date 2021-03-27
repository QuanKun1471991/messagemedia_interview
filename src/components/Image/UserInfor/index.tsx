import React from "react";

interface userInfoProps {
  avatarUrl: string;
  userName: string;
  profileUrl: string;
  className?: string;
}
const Index = ({
  avatarUrl,
  userName,
  profileUrl,
  className = "",
}: userInfoProps) => {
  return (
    <div className={className}>
      <img src={avatarUrl} alt={userName}></img> &nbsp;
      <a href={profileUrl} target="_blank" rel="noreferrer">
        {userName}
      </a>
    </div>
  );
};

export default React.memo(Index);
