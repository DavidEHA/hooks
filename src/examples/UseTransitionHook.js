import { useState, useTransition, memo } from 'react';

const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);      
    });
  }

  function TabButton({ children, isActive, onClick }) {
    if (isActive) {
      return <b>{children}</b>
    }
    return (
      <button onClick={() => {
        onClick();
      }}>
        {children}
      </button>
    )
  }


  const PostsTab = memo(function PostsTab() {
    // Log once. The actual slowdown is inside SlowPost.
    console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');
  
    let items = [];
    for (let i = 0; i < 1000; i++) {
      items.push(<SlowPost key={i} index={i} />);
    }
    return (
      <ul className="items">
        {items}
      </ul>
    );
  });
  
  function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
        Post #{index + 1}
      </li>
    );
  }

  console.log(isPending)
  

  return (
    <>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => selectTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && "About Tab"}
      {tab === 'posts' && <PostsTab/>}
      {tab === 'contact' && "Contact Tab"}
    </>
  );
}

export default UseTransitionHook;