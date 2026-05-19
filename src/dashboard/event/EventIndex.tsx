import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Category = { id: number; name: string };
type Pembicara = { id: number; name: string };

type Event = {
  id: number;
  name: string;
  tanggal: string;
  description: string;
  categoryId: number;
  pembicaraId: number;
  category: Category;     
  pembicara: Pembicara;   
};

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
      if (!response.ok) throw new Error("Gagal mengambil data");
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError("Gagal memuat data event");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const konfirmasi = confirm("Yakin ingin menghapus event ini?");
    if (!konfirmasi) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
        setTimeout(() => setError(null), 3000);
        return;
      }

      setSuccess("Event berhasil dihapus!");
      setTimeout(() => setSuccess(null), 3000);
      fetchEvents();
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat menghapus");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
        <h1 className="text-2xl font-black uppercase tracking-tight">Event</h1>
        <Link
          to="/dashboard/event/new"
          className="bg-yellow-300 text-black font-black uppercase text-sm px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        >
          + Add New Event
        </Link>
      </div>

      {success && (
        <div className="mb-4 px-4 py-3 border-2 border-black bg-green-300 font-bold shadow-[3px_3px_0px_0px_#000]">
          {success}
        </div>
      )}

      {error && (
        <div className="mb-4 px-4 py-3 border-2 border-black bg-red-300 font-bold shadow-[3px_3px_0px_0px_#000]">
          {error}
        </div>
      )}

      {loading && (
        <div className="border-2 border-black px-4 py-3 font-bold bg-yellow-100 shadow-[3px_3px_0px_0px_#000]">
          Memuat data...
        </div>
      )}

      {!loading && (
        <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] overflow-x-auto">
          <table className="w-full text-sm font-bold">
            <thead>
              <tr className="bg-black text-white uppercase text-left">
                <th className="px-4 py-3 w-12">#</th>
                <th className="px-4 py-3">Nama Event</th>
                <th className="px-4 py-3">Kategori</th>       
                <th className="px-4 py-3">Pembicara</th>      
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Deskripsi</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                    Belum ada event
                  </td>
                </tr>
              ) : (
                events.map((event, index) => (
                  <tr
                    key={event.id}
                    className="border-t-2 border-black even:bg-gray-50 hover:bg-yellow-50 transition-colors"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{event.name}</td>
                    <td className="px-4 py-3">{event.category.name}</td>     
                    <td className="px-4 py-3">{event.pembicara.name}</td>   
                    <td className="px-4 py-3">
                      {new Date(event.tanggal).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-4 py-3">{event.description}</td>
                    <td className="px-4 py-3 text-center flex gap-2 justify-center">
                      <Link
                        to={`/dashboard/event/update/${event.id}`}
                        className="bg-blue-300 text-black font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-blue-400 hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="bg-red-400 text-black font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-red-500 hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}