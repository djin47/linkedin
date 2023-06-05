import React from "react";
import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Elon Musk is back", "Top News - 9022 readers")}
      {newsArticle("Tesla hits a new high", "Top News - 6767 readers")}
      {newsArticle("TikTok bans in India","Top News - 4567 readers")}
      {newsArticle("Reliance diluted its 1% shares","Top Finance News - 5654 readers")}
      {newsArticle("Adani diluted its 2% shares", "Top Finance News - 4523 readers" )}
      {newsArticle("Amazon fires 10000 employes","Top Tech News - 6739 readers")}
      {newsArticle("Google cuts 15% of its workforce","Top Tech News - 6543 readers")}
    </div>
  );
}

export default Widgets;
