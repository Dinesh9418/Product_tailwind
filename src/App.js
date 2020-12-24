


function App() {
    return (
      <>
    <div className = "bg-gray-700 font-sans flex flex-col items-center">
      <div className = "bg-teal-700 w-full sm:items-center sm:px-4 sm:py-3 sm:justify-center border-b-4 border-orange-500"> 
        <div className ="max-w-4xl w-full ">
          <div className = " flex items-center px-4 justify-between text-orange-400 text-4xl uppercase ">cricket bat
            <button type = "button" className = "text-gray-500 sm:hidden ">
              <svg className= "h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" 
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 
                  2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>          
          </div>  
        </div>  
        <div className = "my-4">
          <h1 className = "text-2xl text-orange-300 px-4"> English Willows & Kashmir Willows Bats</h1>  
            <div className = "relative mt-4 flex">
              <div>
                <a href ="https://www.google.com/search?q=kashmir+and+english+willow+bats
                        &oq=kashmir+and+english+willow+bats&aqs=chrome..
                        69i57j35i39j0i22i30i457j0i22i30.17858j1j9&sourceid=chrome&ie=UTF-8"
                        className ="bg-orange-500 hover:text-gray-400 text-teal-300 font bold mt-2 px-8 py-2 text-xs uppercase rounded-full">About Bat's
                </a>
                <div className =" block : hidden px-2 pt-2 pb-4 sm:flex sm:p-0  mt-4 mb-2 flex justify-between">            
                  <a href = "#" className ="mt-1 block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600 ">Home</a>
                  <a href = "#" className ="mt-1 block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600 sm:ml-2">Contact Us</a>
                  <a href ="#" className = "mt-1 block px-2 py-2 text-white font-semibold rounded hover:bg-gray-600 sm:ml-2">About Us</a>
                </div>
              </div>
            </div>
            <div className ="bg-white rounded-full flex justify-center items-center p-5 border-4 border-orange-500 absolute right-0">
              <img className ="h-16 w-16" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wanIdOjja63YP8mAQEgjKKdh_MZ9nK6SzA&usqp=CAU"></img>
            </div>
          </div> 
        </div>
      </div>
      <main className="mt-16 w-full flex flex-col ">
        <div className = "max-w-4xl mx-4">
          <h2 className ="font-bold text-xl text-teal-500 border-b border-teal-300  pb-1">Bat's</h2>
            <div className = "flex flex-col mt-8 sm:flex-row sm:-mx-2">
              <div className ="sm:w-1/3 mt-4">
                <div className="bg-white p-8 border-b-4 border-orange-600 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-2">
                  <div className =" bg-gray-200 texte-teal-500 rounded-fill w-16 p-2">
                  </div>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-30 w-50  mb-6" src= "data:image/jpeg;base64,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" alt="" />
                    <div className ="text-center font-bold">Kookabora(English Willow)</div>
                      <div className = "text-center mt-2 text-gray-600 text-sm">Lather bat(use Red and White ball)</div>
                      <a href ="https://www.google.com/aclk?sa=L&ai=DChcSEwiq15mWs-ftAhU0KXIKHQOSCIIYABAEGgJzZg&sig=AOD64_0n0LqH78QODBZP4v6fvg4aV8rLqA&ctype=5&q=&ved=2ahUKEwil-JOWs-ftAhXAyjgGHRwyAngQ9aACegQIEhBl&adurl="
                          className ="bg-orange-500 hover:text-gray-400 text-teal-300 font bold mb-2 px-6 py-2 text-xs uppercase rounded-full">BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
                <div className ="sm:w-1/3 mt-4">
                  <div className="bg-white p-8 border-b-4 border-orange-600 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-2">
                    <div className =" bg-gray-200 texte-teal-500 rounded-fill w-16 p-2">
                    </div>
                    <div  className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img className="w-full h-11 w-10 mb-10 flex" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrWDkuts1J8-kfKblFLBstVZTHblM-nDqLQ&usqp=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" alt="" />
                        <div className ="text-center font-bold">MRF(English And kashmir Willow)</div>
                          <div className = "text-center mt-2 text-gray-600 text-sm">Lather bat(use Red, Pink And White ball)</div>
                            <a href ="https://www.google.com/aclk?sa=L&ai=DChcSEwiLhZr5suftAhWVfisKHTO3CB4YABAGGgJzZg&sig=AOD64_3lcmoDeaQN5tZ9Lz0PpaHEsZ45jw&ctype=5&q=&ved=2ahUKEwjwlJP5suftAhXvyDgGHfrSDiUQ8w56BAgbEFY&adurl="
                              className ="bg-orange-500 hover:text-gray-400 text-teal-300 font bold mt-2 px-8 py-2 text-xs uppercase rounded-full">BUY NOW
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className ="sm:w-1/3 mt-4">
                        <div className="bg-white p-8 border-b-4 border-orange-600 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-2">
                          <div className =" bg-gray-200 texte-teal-500 rounded-fill w-16 p-2"></div>
                            <div  className="max-w-sm rounded overflow-hidden shadow-lg">
                              <img className="w-full h-11 w-10" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOhqH2TXehYQ6LCQx8_BHBDKP96OwLGOBmg&usqp=CAU" alt="" />
                                  <div className ="text-center font-bold">SG(Kashmir Willow)</div>
                                    <div className = "text-center mt-2 text-gray-600 text-sm">Lather bat(use White ball)</div>
                                      <a href ="https://www.google.com/aclk?sa=L&ai=DChcSEwi8yqnhsuftAhWNOCsKHUYuC28YABAFGgJzZg&sig=AOD64_34sB_LPUpgHe6gC4TNgYDP2Uuu1w&ctype=5&q=&ved=2ahUKEwjajaPhsuftAhUHzjgGHQTJBtoQ9aACegQIExBa&adurl="
                                          className ="bg-orange-500 hover:text-gray-400 text-teal-300 font bold mt-2 px-8 py-2 text-xs uppercase rounded-full">BUY NOW
                                      </a>
                                    </div>
                               </div>
                         </div>
                    </div>
               </div>
        </main>
  </>
 );
}

export default App;
