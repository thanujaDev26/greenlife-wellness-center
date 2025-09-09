import React, { useState } from 'react';

const Tabs = ({ 
  tabs, 
  defaultTab = 0,
  onChange,
  className = '',
  variant = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  const variants = {
    default: {
      container: 'border-b border-neutral-200',
      tab: 'py-3 px-6 text-sm font-medium transition-colors duration-200',
      active: 'text-brand-600 border-b-2 border-brand-600',
      inactive: 'text-neutral-600 hover:text-neutral-900'
    },
    pills: {
      container: 'bg-neutral-100 rounded-xl p-1',
      tab: 'py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200',
      active: 'bg-white text-brand-600 shadow-sm',
      inactive: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
    }
  };

  const style = variants[variant];

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className={`flex ${style.container}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${style.tab} ${
              activeTab === index ? style.active : style.inactive
            }`}
            disabled={tab.disabled}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="pt-6">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;