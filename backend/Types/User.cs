using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public class User : BaseType
    {
        [NotNull]
        [Column("name")]
        public string Name { get; set; }

        [NotNull]
        [Column("email")]
        public string Email { get; set; }

        [Column("verify_state")]
        public bool Verify { get; set; } = false;
    }
}
