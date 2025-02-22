export default function SearchBar({ value, onChange }) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={() => console.log(value)}>Search</button>
        </div>
    );
}
