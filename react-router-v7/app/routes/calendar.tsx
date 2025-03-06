import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const events = [
  {
    date: new Date(2025, 2, 15),
    title: "ミーティング",
  },
  {
    date: new Date(2025, 2, 20),
    title: "デプロイ",
  },
  {
    date: new Date(2025, 2, 25),
    title: "リリース",
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">カレンダー</h1>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{
          event: events.map((event) => event.date),
        }}
        modifiersStyles={{
          event: {
            color: "white",
            backgroundColor: "#3b82f6",
          },
        }}
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">イベント</h2>
        <ul className="mt-2">
          {events
            .filter(
              (event) => event.date.toDateString() === date?.toDateString()
            )
            .map((event) => (
              <li key={event.title} className="py-1">
                {event.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
