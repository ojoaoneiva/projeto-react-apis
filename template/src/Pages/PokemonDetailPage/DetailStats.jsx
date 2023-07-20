import { Style } from "./DetailStatsStyle"

export const DetailStats = ({ number, stat }) => {
    let color = ""
    switch (stat) {
        case "special-attack":
            stat = "Sp._Atk"
            break
        case "special-defense":
            stat = "Sp._Def"
            break
        case "hp":
            stat = "HP"
            break
        default:
            stat = (stat[0].toUpperCase() + stat.slice(1, stat.length))
    }

    if (number < 40) {
        color = "#f63d33"
    }
    else if (number < 60) {
        color = "#F67B33"
    }
    else if (number < 80) {
        color = "#FFDE6C"
    }
    else {
        color = "#82ff6c"
    }

    return (
        <Style colorBar={color} size={number + 30}>
            <p>{stat}</p>
            <p>{number}</p>
            <div className="bar"></div>
        </Style>
    )
}