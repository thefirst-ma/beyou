/*
 * @Author: xinyue
 * @Date: 2023-06-12 14:06:40
 * @Description: 
 */
import React from 'react';

const ViewerInfo = ({ location, currentViewers, viewedCount }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">{location}</div>
      <div className="mr-2">{currentViewers} 人正在看</div>
      <div>{viewedCount} 人已看</div>
    </div>
  );
};

export default ViewerInfo;
