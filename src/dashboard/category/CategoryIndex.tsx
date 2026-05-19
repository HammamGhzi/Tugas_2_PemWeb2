import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); 

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories`,
      );
      if (!response.ok) throw new Error("Gagal mengambil data");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError("Gagal memuat data kategori");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const konfirmasi = confirm("Yakin ingin menghapus kategori ini?");
    if (!konfirmasi) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
        setTimeout(() => setError(null), 3000);
        return;
      }

      setSuccess("Category berhasil dihapus!"); 
      setTimeout(() => setSuccess(null), 3000); 
      fetchCategories();
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat menghapus");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
        <h2 className="text-2xl font-black uppercase tracking-tight">
          Kategori Event
        </h2>
        <Link
          to="/dashboard/category/create"
          className="bg-yellow-300 text-black font-black uppercase text-sm px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
        >
          + Add New Category
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
        <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          <table className="w-full text-sm font-bold">
            <thead>
              <tr className="bg-black text-white uppercase text-left">
                <th className="px-4 py-3 w-12">#</th>
                <th className="px-4 py-3">Nama Kategori</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    Belum ada kategori
                  </td>
                </tr>
              ) : (
                categories.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className="border-t-2 border-black even:bg-gray-50 hover:bg-yellow-50 transition-colors"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{cat.name}</td>
                    <td className="px-4 py-3 text-center flex gap-2 justify-center">
                      <Link
                        to={`/dashboard/category/update/${cat.id}`}
                        className="bg-blue-300 text-black font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-blue-400 hover:shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(cat.id)}
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
