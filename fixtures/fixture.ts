import { readFileSync } from "fs"
import path from "path"

interface ThemeColor {
  key: string
  value: string | null
}

const loadPalette = (filePath: string): ThemeColor[] => {
  const raw = readFileSync(path.resolve(filePath), "utf-8")
  const theme = JSON.parse(raw)
  return Object.entries(theme.colors).map(([key, value]) => ({
    key,
    value: value as string | null,
  }))
}

const isOnPalette = (hex: string, palette: string[]): boolean =>
  palette.some((p) => hex.toLowerCase().startsWith(p.toLowerCase()))

const PALETTE = [
  "#21222c",
  "#30364a",
  "#272a38",
  "#2a2b38",
  "#ed7249",
  "#b84e2e",
  "#c8d5e0",
  "#b8c5d0",
]

const audit = (filePath: string) => {
  const colors = loadPalette(filePath)
  const offPalette = colors.filter(
    ({ value }) => value && !isOnPalette(value, PALETTE),
  )
  console.log(`Off-palette entries: ${offPalette.length}`)
  offPalette.forEach(({ key, value }) => console.log(`  ${key}: ${value}`))
}

audit("themes/november.json")
