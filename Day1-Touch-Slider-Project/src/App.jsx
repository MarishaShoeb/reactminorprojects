import React from 'react'
// import Cards from './components/Cards'
import Cards from './components/Cards'

const App = () => {
  return (
    <>
      <div className="bg-no-repeat p-12 h-screen"

        style={{
          backgroundImage:
            `url('https://1.bp.blogspot.com/-7pnpip1vHbk/YCfsLakiO2I/AAAAAAAAALw/9NEhzIuc9-8FZGZ8-id3Nq7zquIoiH9lACLcBGAsYHQ/s1900/dragon-ball-super.jpg')`
        }} >

        {/* <div className='p-2'><Cards /></div> */}
        <Cards />
      </div>
    </>
  )
}

export default App
