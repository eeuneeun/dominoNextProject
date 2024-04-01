// # 채팅 페이지
"use client";

export default function chat() {

  function sendReq(e:React.MouseEvent<HTMLElement, MouseEvent>){
    e.preventDefault()
    console.log("질문 상태에 추가")

  }
  return (
    <>
      <h2>채팅 페이지</h2>
      <section className="chat-wrap">
        

        <form action="" method="post" className="flex-between">
          <input type="text" />
          <button onClick={sendReq}>전송</button>
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
