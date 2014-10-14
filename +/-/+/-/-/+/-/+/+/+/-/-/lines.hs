
import System.Random

getTick :: Int -> Int -> Char
getTick i n = if i == n then '+' else '-'

doLine :: RandomGen g => g -> IO ()
doLine g = do
    let (n, g') = randomR (0, 9) g
    putStrLn [ getTick i n | i <- [0..9] ]
    doLine g'

main :: IO ()
main = do
    g <- newStdGen
    doLine g

