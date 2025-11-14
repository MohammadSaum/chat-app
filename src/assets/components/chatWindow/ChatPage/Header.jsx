const Header = () => {
  return (
    <div className='flex justify-between'>
      WhatsApp
      <div className='flex gap-4 '>
        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" height='26' viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.9991 2.99995C19.3131 2.99995 22 5.69516 22 8.9941V21H8.00099C4.68693 21 2.00001 18.3048 2.00001 15.0058V10.6572C2.62568 10.8784 3.29859 11 4.00001 11C7.31372 11 10 8.31367 10 4.99995C10 4.29854 9.87844 3.62562 9.65724 2.99995H15.9991ZM8.00002 13H10V11H8.00002V13ZM14 13H16V11H14V13ZM3.52931 1.31928C3.70584 0.89349 4.29418 0.893492 4.47071 1.31928L4.72364 1.93061C5.15555 2.9734 5.96155 3.80612 6.97462 4.25679L7.6924 4.57612C8.10268 4.75894 8.10263 5.35615 7.6924 5.53902L6.93263 5.87691C5.94498 6.31619 5.15339 7.11941 4.71388 8.12789L4.46681 8.69332C4.28636 9.10745 3.71366 9.10745 3.53321 8.69332L3.28614 8.12789C2.84661 7.11942 2.05506 6.31619 1.06739 5.87691L0.307623 5.53902C-0.102517 5.35615 -0.102565 4.75894 0.307623 4.57612L1.0254 4.25679C2.03845 3.80613 2.84446 2.97343 3.27638 1.93061L3.52931 1.31928Z"></path></svg>
        </div>

        <div className='flex justify-center items-center duration-200 cursor-pointer hover:bg-[#FFFFFF1D] h-10 w-10 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" height='24'viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg></div>
      </div>
    </div>
  )
}

export default Header
