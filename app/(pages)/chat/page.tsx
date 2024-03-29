// # 채팅 페이지
"use client";

export default function chat() {
  return (
    <>
      <h2>채팅 페이지</h2>
      <section className="chat-wrap">
        

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
