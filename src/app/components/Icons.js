"use client";
import React from "react";

export function Home({ size = "22px", color = "#545F71" }) {
    return (
        <svg 
        width = {size}
        height= {size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
         d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" 
         stroke = {color}
         stroke-width="2" 
         stroke-linecap="round" 
         stroke-linejoin="round"
         />
        </svg>
    );
  }

  export function Cards({ size = "22px", color = "#545F71" }) {
    return (
        <svg 
        width = {size}
        height= {size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
         d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" 
         stroke = {color}
         stroke-width="2" 
         stroke-linecap="round" 
         stroke-linejoin="round"
          />
        </svg>
    );
  }

  export function Menu({ size = "22px", color = "#545F71" }) {
    return (
        <svg 
        width = {size}
        height= {size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
         d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" 
         stroke = {color} 
         stroke-width="2" 
         stroke-linecap="round" 
         stroke-linejoin="round"
         />
        </svg>
    );
  }


  export function Eye({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  export function Tick({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
     >
        <path 
          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
          stroke = {color} 
          stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>
    );
  }


  export function X({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
     >
        <path 
          d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke = {color} 
          stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>
    );
  }


  export function ArrowRight({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
     >
        <path 
          d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke = {color} 
          stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>
    );
  }  


  export function Right({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
     >
        <path 
          d="M7.5 4.16659L13.3333 9.99992L7.5 15.8333" 
          stroke = {color} 
          stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        />
      </svg>
    );
  }    


  export function Eclipse10({ size = "22px", color = "#545F71" }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
     >
        <circle cx="8" cy="8" r="8" fill="#545F71"
        />
      </svg>
    );
  }      


// 1. copy or type out the code below this step and replace the word 'Eye' with the name of the new icon

// export function Eye({ size = "22px", color = "#545F71"}) {
//   return (

//   );
// }







// 2. paste the svg from your text file into the ( ); after the word 'return', like below

// export function Eye({ size = "22px", color = "#545F71" }) {
//   return ( //after this
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//         stroke="#545F71"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"
//         stroke="#545F71"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// }







// 3. replace the first two variables' values (width and height values) with {size}
// 4. replace the values of variables called 'stroke' with {color}

// export function Eye({ size = "22px", color = "#545F71" }) {
//   return (
//     <svg
//       width={size} //step 3 here
//       height={size} //step 3 here
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//         stroke={color} //step 4 here
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"
//         stroke={color} //step 4 here too, sometimes theres more than 1 stroke variable
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// }



//5. after doing this for every icon, go back to the instructions i sent you in LINE to see the next steps 