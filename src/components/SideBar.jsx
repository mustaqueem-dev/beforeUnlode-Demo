import React from 'react';

function Sidebar({ currentMenu, onMenuClick }) {
  const menus = ['Dashboard', 'Counter Test Page', 'Profile', 'Settings'];

  return (
    <aside style={styles.sidebar}>
      <h2 style={{ color: '#fff', marginBottom: '30px' }}>🚀 My App</h2>
      <ul style={styles.menuList}>
        {menus.map((menu) => (
          <li 
            key={menu} 
            onClick={() => onMenuClick(menu)}
            style={{
              ...styles.menuItem,
              backgroundColor: currentMenu === menu ? '#34495e' : 'transparent',
              fontWeight: currentMenu === menu ? 'bold' : 'normal'
            }}
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: { width: '240px', backgroundColor: '#2c3e50', padding: '20px', height: '100vh', boxSizing: 'border-box' },
  menuList: { listStyle: 'none', padding: 0, margin: 0 },
  menuItem: { padding: '12px 16px', color: '#ecf0f1', cursor: 'pointer', borderRadius: '4px', marginBottom: '8px', transition: '0.2s' }
};

export default Sidebar;
