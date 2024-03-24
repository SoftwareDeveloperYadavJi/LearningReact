import React from 'react'

function Nav({Brand = 'Logo'}) {

  return (
    <nav class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
      
        <div class="text-white text-xl font-bold">{Brand}</div>

        
        <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">About</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
        </ul>
    </div>
</nav>
  )
}

export default Nav