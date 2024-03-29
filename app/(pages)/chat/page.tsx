// # 채팅 페이지
"use client";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function chat() {
  function addNewChatRoom(){
    console.log("새 채팅방 추가");
  }

  return (
    <>
      <h2>채팅 페이지</h2>
      <section className="chat-wrap">
        <button className='add-chatroom' onClick={addNewChatRoom}>
          <AddBoxIcon />
        </button>

        <form action="" method="post" className="flex-between">
          <input type="text" />
          <button>전송</button>
        </form>

        <div className="chat-history">
          <ul>
            <li></li>
          </ul>
        </div>
        </section> 
    </>
  );
}
