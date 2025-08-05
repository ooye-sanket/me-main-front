import React from 'react';


interface WorkStripProps {
  className?: string;
}

const WorkStrip: React.FC<WorkStripProps> = ({ className = '' }) => {
  const text = 'LET\'S WORK TOGETHER. ';
  const repeatedText = text.repeat(50); // Repeat many times to ensure full coverage

  return (
    <div className={`work-strip ${className}`}>
      <div className="work-strip__content">
        {repeatedText}
      </div>
    </div>
  );
};

export default WorkStrip;