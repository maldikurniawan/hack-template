import React from 'react';
import { Calendar, TerminalCard } from '@/components';
import { motion } from "framer-motion";

const CalendarPage: React.FC = () => {
    // Example events
    const events = [
        { title: 'Meeting with Team', date: '2025-01-20' },
        { title: 'Project Deadline', date: '2025-01-22' },
    ];

    // Event click handler
    const handleEventClick = (eventInfo: any) => {
        alert(`Event clicked: ${eventInfo.event.title}`);
    };

    // Date selection handler
    const handleDateSelect = (selectionInfo: any) => {
        alert(`Date selected: ${selectionInfo.startStr} to ${selectionInfo.endStr}`);
    };

    return (
        <motion.div
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <TerminalCard title='Calendar'>
                <div className='scroll-hidden calendar-wrapper'>
                    <Calendar
                        events={events}
                        onEventClick={handleEventClick}
                        onDateSelect={handleDateSelect}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev next today',
                            center: 'title',
                            right: 'buttonAdd'
                        }}
                    />
                </div>
            </TerminalCard>
        </motion.div>
    );
};

export default CalendarPage;
