import Experience from "./Layout/Experience";
import Sidebar from "./Layout/Sidebar";
import Column from "./UI/Column";

function App() {
  function handleClick() {
    const link = document.createElement("a");
    link.href = "/Resume-Jovin-Liu-Full-Stack.pdf";
    link.download = "Resume-Jovin-Liu-Full-Stack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Column>
      <button
        className="h-10 bg-sky-200 transition-all hover:bg-sky-500 hover:text-white"
        onClick={handleClick}
      >
        DOWNLOAD RESUME
      </button>
      <main className="flex flex-row justify-center">
        <div className="bg-black-400 flex h-[297mm] w-[210mm] flex-row">
          <Sidebar />
          <Experience />
        </div>
      </main>
    </Column>
  );
}

export default App;

/*
Here is my suggestion. 

Phase 1: with what we have

Emphasize transferable skills: Highlight skills from architecture that apply to software development, such as project management, attention to detail, and problem-solving. Also more stories about the previous roles, and how that can help for the new roles. 
Showcase software projects: Feature any personal or professional software projects prominently, even if they're small-scale or done as part of learning.
Add a summary section: 


Option 1: More like a statement.



Hi there! I'm Jovin, a friendly and enthusiastic Full Stack Web Developer with a unique background in architecture. I'm passionate about creating intuitive digital experiences and solving complex problems through code. Armed with skills in JavaScript, React, and Node.js, I'm eager to bring fresh perspectives to software development projects. I love learning and growing in this ever-evolving field, and I thrive in collaborative environments. With my architectural eye for detail and design, I’m looking forward to contributing with my creative and analytical skills to future development works. 

 

Option 2: Story telling



Hi, I'm Jovin! My journey from architect to Full Stack Web Developer is driven by a passion for bringing ideas to life. While designing buildings, I discovered the beauty of coding, which is the key of implementing ideas. Now, I blend my architectural eye for detail with JavaScript, React, and Node.js skills to craft intuitive web applications.

My unique background lets me see both the big picture and the fine details in software development. I'm excited to apply my creative problem-solving and technical abilities to innovative projects. Let's build something amazing together!



Phase 2: what I need to do. 



More certificates
Networking: going to meetups 
More profile
Find a suitable target for myself
Improve communication

Personal information 个人信息
（基本信息：年龄，学历，留学，专业,  英语）
（职业：工作经验，行业岗位，国际认证）
（移民：PR，家庭背景，财务状况，兴趣爱好)
（调查：你从什么途径得到我的联系方式）Alex Wang推荐


35岁，Master of Architecture， 墨尔本大学，
英语：口语7分，来澳洲10年了
工作：之前是做建筑师，没有IT经验
PR：有PR
爱好：物理

=====

建议
考AWS Developer
Typescript
前端： NextJs
后端： SQL（增删改查）

===
CV
颜色
Education， Remove Udemy
Profile
1+ year 
Contribute to X Frontend projects
Move PR to the last
Construction background
Soft skills
Communication,
Leadership
Eager to lean


----
*/
