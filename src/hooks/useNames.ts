import { useEffect, useState } from "react";
import namesData from "../../public/names.json";

export const useNames = () => {
  const [names] = useState<any[]>(namesData as any[]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [sort, setSort] = useState<"name"|"popularity"|"views">("name");
  const [alpha, setAlpha] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  useEffect(() => {
    let result = [...names];
    if (search) {
      result = result.filter(n =>
        n.name.toLowerCase().includes(search.toLowerCase()) ||
        n.name_en.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (gender) {
      result = result.filter(n => n.gender === gender);
    }
    if (origin) {
      result = result.filter(n => n.origin === origin);
    }
    if (alpha) {
      result = result.filter(n =>
        n.name_en.toUpperCase().startsWith(alpha)
      );
    }
    if (sort === "name") {
      result.sort((a, b) => a.name_en.localeCompare(b.name_en));
    }
    if (sort === "popularity") {
      result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }
    if (sort === "views") {
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    }
    setFilteredNames(result);
  }, [search, gender, origin, sort, alpha, names]);

  const resetFilters = () => {
    setSearch("");
    setGender("");
    setOrigin("");
    setAlpha("");
    setSort("name");
  };

  return { filteredNames, setSearch, setGender, setOrigin, setSort, setAlpha, sort, alpha, resetFilters };
};