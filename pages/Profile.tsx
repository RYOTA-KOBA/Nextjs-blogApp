import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="rounded rounded-t-lg overflow-hidden shadow-2xl max-w-xs my-3 mx-auto my-20">
        <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
        <div className="flex justify-center -mt-8">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-white border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-black text-sm bold font-sans">RYOTA KOBAYASHI</h3>
          <p className="mt-2 font-sans font-light text-grey-dark">
            Hello, i'm from another the other side!
          </p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark">
          <div className="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Photos</span>
          </div>
          <div className="text-center">
            <h2>42</h2>
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}
